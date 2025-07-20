import spawn from 'cross-spawn';

export default function generateProject(language, projectName) {
  return new Promise((resolve, reject) => {
    const args = ['create-next-app@latest', projectName];
    if (language === 'ts') args.push('--typescript');

    const cmd = 'npx';

    const child = spawn(cmd, args, { stdio: 'inherit' });

    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`create-next-app exited with code ${code}`));
    });
  });
}
