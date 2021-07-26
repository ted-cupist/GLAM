export interface IProfileInput {
  nickname: string;
  birth: Date;
  home: string;
  intro: string;
  tall: number;
  physical: string;
  rectal: string | null;
  // 직장
  job: string;
  grade: string;
  school: string;
  personality: string[];
  religion: string;
  // 종교
  bear: string;
  smoking: string;
  bloodType: string;
  race: string;
  // 인종
  charm: string[];
  interest: string[];
  lifeStyle: string[];
}
