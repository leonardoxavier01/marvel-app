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
  checked?: boolean;
}

export interface IStorageCharacters {
  characterId: string;
  name: string;
  rate: number;
}
