import { Button } from './Button';
import { Input } from './Input';

export function Form() {
  return (
    <form>
      <Input id="nome" label="Name" />
      <Input id="email" label="Email" required />
      <Input id="password" label="Password" type="password" />
      <Button buttonText="Clique" />
    </form>
  );
}
