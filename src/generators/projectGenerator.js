import spawn from 'cross-spawn';

export default function generateProject(language, projectName) {
  return new Promise((resolve, reject) => {
    const args = [
      'create-next-app@15.4.1', 
      projectName,
      language === 'ts' ? '--typescript' : '--javascript',
      '--tailwind',
      '--eslint',
      '--src-dir',
      '--no-app', 
      '--import-alias', '@/*',
      '--no-interactive',
      '--yes',
    ];

    const cmd = 'npx';

    const child = spawn(cmd, args, { stdio: 'inherit' });

    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`create-next-app exited with code ${code}`));
    });
  });
}
