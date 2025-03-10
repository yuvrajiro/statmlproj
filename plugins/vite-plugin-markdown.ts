import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { Plugin } from 'vite';

interface PluginOptions {
  markdownDir: string; // Path to the Markdown directory
  outputFile: string;  // Path to the generated module (relative to src/)
}

export function vitePluginMarkdown(options: PluginOptions): Plugin {
  const { markdownDir, outputFile } = options;

  return {
    name: 'vite-plugin-markdown',
    async buildStart() {
      try {
        const markdownFiles = await fs.readdir(markdownDir);
        const blogPosts: any[] = [];

        for (const file of markdownFiles) {
          if (file.endsWith('.md')) {
            const filePath = path.join(markdownDir, file);
            const fileContent = await fs.readFile(filePath, 'utf-8');
            const { content, data } = matter(fileContent);

            const slug = path.basename(file, '.md'); // Extract the file name as slug

            blogPosts.push({
              slug,
              title: data.title || 'Untitled',
              excerpt: data.excerpt || generateExcerpt(content,50), // Auto-generate excerpt if missing
              author: data.author || 'Unknown',
              date: formatDate(data.date),  // Standardized date format
              keywords : data.tags || 'Unknown',
              image: data.image || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
              category: data.category || 'General',
            });
          }
        }

        const output = `export const blogPosts = ${JSON.stringify(blogPosts, null, 2)};`;
        const outputPath = path.resolve(process.cwd(), 'src', outputFile); // Absolute output path
        await fs.writeFile(outputPath, output);

        console.log(`✅ Processed ${blogPosts.length} Markdown files and created ${outputFile}`);
      } catch (error) {
        console.error('❌ Error processing Markdown files:', error);
      }
    },
  };
}

/**
 * Generates an excerpt from the first 200 characters of content.
 */
function generateExcerpt(content: string, length: number = 200): string {
  return content.split(/\s+/).slice(0, length).join(' ') + '...';
}

/**
 * Formats the date to a standardized format.
 */
function formatDate(date: string | undefined): string {
  if (!date) return new Date().toISOString().split('T')[0]; // Default to today
  return new Date(date).toISOString().split('T')[0];
}
