import ChatController from '../controllers/chat-controller';
import UserController from '../controllers/user-controller';

export function fileReader(form: HTMLFormElement, chatId?: number) {
  const { inputFiles, data, fileReader } = prepareData(form);

  if (inputFiles) {
    data.append('avatar', inputFiles[0]);

    if (chatId) {
      fileReader.onload = async () => {
        data.append('chatId', chatId.toString());
        await ChatController.uploadChatAvatar(data);
      }
    } else {
      fileReader.onload = async () => {
        await UserController.changeUserAvatar(data);
      }
    }

    fileReader.readAsDataURL(inputFiles[0]);

    fileReader.onerror = function () {
      console.log(fileReader.error);
    };
  }
}

function prepareData(form: HTMLFormElement) {
  const input = form.querySelector('input');
  const inputFiles = input!.files;

  const data = new FormData();
  const fileReader = new FileReader();

  return { inputFiles, data, fileReader }
}
