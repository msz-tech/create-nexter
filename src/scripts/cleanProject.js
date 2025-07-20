
import fs from 'fs-extra';
import path from 'path';

export async function cleanProject(projectName, language) {
  const projectPath = path.resolve(process.cwd(), projectName);
  const isTs = language === 'TypeScript';

  const filesToRemove = [
    'README.md',
    'app',
    'public',
    'src/app',
    'src/styles',
    'src/pages',
    'src',
  ];

  console.log('🧹 Cleaning up generated project...');

  try {

    for (const file of filesToRemove) {
      const target = path.join(projectPath, file);
      if (await fs.pathExists(target)) {
        await fs.remove(target);
        console.log(`🗑️ Removed: ${file}`);
      }
    }

    const dirsToCreate = [
      'public',
      'src/components',
      'src/pages',
      'src/styles',
      'src/lib',
    ];

    for (const dir of dirsToCreate) {
      const target = path.join(projectPath, dir);
      await fs.ensureDir(target);
      console.log(`📁 Created: ${dir}`);
    }

   
    const customReadme = `# ${projectName}

Generated with [create-nexter](https://github.com/msz-tech/create-nexter)

## Stack

- Next.js
- ${isTs ? 'TypeScript' : 'JavaScript'}
- Tailwind CSS
- ESLint / Prettier
- App router with \`/src\` structure

## Get started

\`\`\`bash
cd ${projectName}
npm run dev
\`\`\`
`;

    await fs.writeFile(path.join(projectPath, 'README.md'), customReadme);
    console.log('📝 Custom README added.');

 
    const pageExt = isTs ? 'tsx' : 'jsx';
    const indexContent = `export default function Home() {
  return <h1 className="text-2xl font-bold">Welcome to ${projectName} 👋</h1>;
}
`;

    await fs.writeFile(
      path.join(projectPath, `src/pages/index.${pageExt}`),
      indexContent
    );
    console.log(`📄 Created: src/pages/index.${pageExt}`);

  } catch (err) {
    console.error('❌ Cleanup failed:', err);
    throw err;
  }
}
