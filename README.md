# Wiki Search
### NOTE: The API used to create this website is no longer functional so the website does not work as originally intended
[Click here](https://svmo.github.io/wiki-notebook/) for the website!

## Description
```
Wiki Search provides a way to search wikipedia without going on the wiki site. 
On page load, random wiki articles are shown. Click on the button and the 
link will open to wikipedia. When user search term is received, wikipedia 
articles containing the keyword will be shown.
```


## Custom CSS Classes
```
The class(es) I created are:

1. border-3
.. overrides border for cards, makes it thicker and a custom color

2. wiki-btn
.. adds custom background color to button

3. body
.. adds background image to the page

More custom css can be seen in boot.css
```



## Custom JavaScript Functions
```
The javascript functions I created are:

1. getWikiArticles()
.. the function uses wiki api to pull all articles related to the 
users search keyword. Cards are created and appended to the page 
with the title, snippet, and image (if available) of the keyword

2. getRandomWikiCard()
.. the function uses wtf_wikipedia to pull a specified (15 currently) 
number to random articles. Cards are created and appended to the page 
with the title, snippet, and image (if available) of the random article

```
## References
* All pictures, titles, and paragraphs are pulled from 
wikipedia using [their](https://www.mediawiki.org/wiki/API:Main_page) API and [wtf_wikipedia](https://github.com/spencermountain/wtf_wikipedia) API. 
* Inspiration from [Building a Wiki Search App](https://www.freecodecamp.org/news/building-a-wikipedia-search-engine-project-4d84de3841d2/) and [Wikipedia Viewer](https://codepen.io/AbdiViklas/pen/VjdXOm?editors=0010)
