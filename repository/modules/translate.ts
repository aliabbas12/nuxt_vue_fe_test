import HttpFactory from "../factory";

interface Text {
  text: string;
}

class TranslateModule extends HttpFactory {
  private readonly RESOURCE = "/translate";

  async translate(text: Text): Promise<any> {
    return await this.call<any>("POST", `${this.RESOURCE}/text`, text);
  }
}

export default TranslateModule;
