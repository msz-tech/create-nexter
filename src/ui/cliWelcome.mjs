import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';

export function displayWelcome() {
  console.clear();

  const msg = figlet.textSync('Create Nexter', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  });

  console.log(gradient.pastel.multiline(msg));
  console.log(chalk.cyanBright('Welcome to create-nexter CLI!\n'));
  console.log(chalk.white('Effortless Next.js project scaffolding, built for scalable and maintainable applications.\n'));
}
