import prompts from 'prompts';
import languagePrompt from './prompts/languagePrompt.js';
import generateProject from './generators/projectGenerator.js';
import { cleanProject } from '../src/scripts/cleanProject.js';  
import { copyTemplateFiles } from './utils/copyTemplateFiles.js';


const args = process.argv.slice(2);
const defaultProjectName = args[0];

export default async function main() {
  const { language } = await languagePrompt();

  
  const response = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'Enter your project folder name',
    initial: defaultProjectName || 'my-nexter-app',
    validate: name => (name.trim() === '' ? 'Project name cannot be empty' : true),
    
    onState: state => {
      if (defaultProjectName) {
        state.aborted = true;
        state.value = defaultProjectName;
      }
    }
  });


  const finalProjectName = defaultProjectName || response.projectName;

  console.log(`Generating Next.js project '${finalProjectName}' with language: ${language}`);

  try {
    await generateProject(language, finalProjectName);

    await cleanProject(finalProjectName, language);
    
    await copyTemplateFiles(finalProjectName, language);

    console.log('✅ Cleanup and structure completed.');
    console.log('🎉 Project created successfully!');
  } catch (err) {
    console.error('❌ Error during project generation:', err);
  }
}
