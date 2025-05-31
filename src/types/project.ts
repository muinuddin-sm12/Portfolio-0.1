export interface IProject{
    id: string;
    title: string;
    slug: string;
    tagline: string;
    overview: string;
    features: string[];
    image: string;
    technologies: string[];
    liveLink: string;
    githubLink: string
}

export interface ICertificate {
    title: string;
    description: string;
    image: string;
    color: string;
}