import UserController from '../controllers/user-controller';

export function fileReader(form: HTMLFormElement) {
  const input = form.querySelector('input');
  const inputFiles = input!.files;

  const data = new FormData();
  const fileReader = new FileReader();

  if (inputFiles) {
    data.append('avatar', inputFiles[0]);

    fileReader.onload = async () => {
      await UserController.changeUserAvatar(data);
    }

    fileReader.readAsDataURL(inputFiles[0]);

    fileReader.onerror = function () {
      console.log(fileReader.error);
    };
  }
}

