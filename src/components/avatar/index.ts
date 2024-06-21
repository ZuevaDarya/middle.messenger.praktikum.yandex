import avatarTmpl from './avatar';
import Block from '../../shared/utils/block';

interface IAvatarProps {
  src?: string;
  alt?: string;
}
class Avatar extends Block {
  constructor(props: IAvatarProps) {
    super('div', {...props});
  }

  redefineRender() {
    return avatarTmpl;
  }
}

export default Avatar;
