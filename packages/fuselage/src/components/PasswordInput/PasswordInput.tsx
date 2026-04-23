import { useToggle } from '@rocket.chat/fuselage-hooks';
import { forwardRef } from 'react';

import { IconButton } from '../Button';
import { InputBox, type InputBoxProps } from '../InputBox';

// TODO: fix a11y issues

export type PasswordInputProps = Omit<InputBoxProps, 'type'>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(props, ref) {
    const [hidden, toggle] = useToggle(true);
    const handleAddonClick = () => {
      toggle();
    };

    return (
      <InputBox
        type={hidden ? 'password' : 'text'}
        addon={
          <IconButton
            icon={hidden ? 'eye-off' : 'eye'}
            mini
            onClick={handleAddonClick}
          />
        }
        ref={ref}
        {...props}
      />
    );
  },
);

export default PasswordInput;
