import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import boxen from 'boxen';

export function displayWelcome() {
  console.clear();

  const asciiArt = figlet.textSync('Create Nexter', {
    font: 'Small', 
    horizontalLayout: 'default',
    verticalLayout: 'default',
  });

  const gradientAscii = gradient.pastel.multiline(asciiArt);

  const content = [
    gradientAscii,
    '',
    chalk.cyanBright('Version: 1.0.1'),
    '',
    chalk.whiteBright('Effortless Next.js project scaffolding'),
    chalk.whiteBright('Built for scalable and maintainable applications.'),
    '',
    chalk.gray('Author: Mehdi Salim Zayani'),
    chalk.gray('Repo: https://github.com/msz-tech/create-nexter'),
    '',
    chalk.greenBright('Get started with:'),
    chalk.green('  npx create-nexter my-app'),
  ].join('\n');

  const box = boxen(content, {
    padding: 1,
    margin: { top: 1, bottom: 0, left: 1, right: 1 }, 
    borderColor: 'magenta',
    borderStyle: 'round',
    align: 'center',
  });

  console.log(box);
}
