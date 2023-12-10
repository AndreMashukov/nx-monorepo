// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { SharedButton } from '@org/SharedButton';
import { SharedComponent } from '@org/SharedComponent';

export function App() {
  return (
    <div>
      <SharedButton label="Shared Button" />
      <SharedComponent />
    </div>
  );
}

export default App;
