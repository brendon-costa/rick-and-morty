export interface CharacterModel {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    episode: string[];
    url: string;
    created: string;
    location: LocationModel;
    origin: OriginModel;
}

interface LocationModel {
    name: string;
    url: string;
}

interface OriginModel {
    name: string;
    url: string;
}
