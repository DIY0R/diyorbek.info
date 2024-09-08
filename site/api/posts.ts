export class Post {
  private readonly url = process.env.API || 'https://api-blog-gilt.vercel.app';

  public async getTitles() {
    const data = await fetch(this.url + '/titles');
    const titles: string[] = await data.json();
    return titles.map((title) => title.replace(/\.[^/.]+$/, ''));
  }

  public async getPost(title: string) {
    const data = await fetch(this.url + `/contents/${title}`);
    const titles = data.text();
    return titles;
  }
}

export default new Post();
