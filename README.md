# lyrics_finder_react
Music lyrics finder using react

I am using 'https://developer.musixmatch.com/' to fetch the lyrics. You need to have API key to access it. Please create your free account their.

Currently it is fetching records from the India. You can specify any country in the .env file (should have 2 characters). Check above site for more details.

Start the server on default port i.e. 3000.

```
Pull the repo. 
npm install
npm run start
```

Or you can also docker file. I have also written docker file.

```
docker build -t lyrics-finder:latest .
docker run -it -p 3000:3000 --name lyrics-finder <image-id>
```

Screenshot:

![](https://github.com/tushargoel86/lyrics_finder_react/blob/master/screenshot.PNG)

