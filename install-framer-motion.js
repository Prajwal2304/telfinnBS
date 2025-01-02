import { execSync } from 'child_process';

try {
  console.log('Installing framer-motion...');
  execSync('npm install framer-motion', { stdio: 'inherit' });
  console.log('framer-motion has been successfully installed.');
} catch (error) {
  console.error('An error occurred while installing framer-motion:', error);
}