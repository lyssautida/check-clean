export interface IHashProvider {
  compare(value: string, hash: string): Promise<boolean>;
  generateHash(size: number): Promise<string>;
  generateApiToken(): Promise<string>;
}