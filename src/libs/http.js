class Http {
  static instance = new Http();

  get = async (url) => {
    try {
      let req = await fetch(url)
      let json = await req.json();
      return json;
    }

    catch (err) {
      console.log('http get methos error', err);
      throw Error(err);
    }
  }

  post = async (url, body) => {
    try {
      let req = fetch(url, {
        method: 'POST',
        body
      });

      let json = await req.json();
      return json;
    }
    catch (err) {
      log.error('http post methos', err);
      throw Error(err);
    }
  }
}

export default Http;