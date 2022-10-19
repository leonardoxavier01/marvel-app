export interface IResponseCharacters {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface IResponseComics {
  id: string;
  title: string;
  checked: boolean;
}
