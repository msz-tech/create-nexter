import prompts from 'prompts';

export default async function languagePrompt() {
  return prompts({
    type: 'select',
    name: 'language',
    message: 'Choose your language',
    choices: [
      { title: 'JavaScript', value: 'js' },
      { title: 'TypeScript', value: 'ts' }
    ]
  });
}
