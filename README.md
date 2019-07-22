# Wiki Search

## Description
```
Wiki Search provides a way to search wikipedia without going on the wiki site. 
On page load, random wiki articles are shown. Click on the button and the 
link will open to wikipedia. If user puts in a search term and searchs, wikipedia 
articles containing the keyword will be shown.
```


## Custom CSS Classes
```
The class(es) I created are:

1. border-3
.. overrides border for cards, makes it thicker and a custom colo2

2. wiki-btn
.. adds custom background color to button

3. body
.. adds background image to the page
```



## Custom JavaScript Functions
```
The javascript functions I created are:

1. getWikiArticles()
.. the function uses wiki api to pull all articles related to the 
users search keyword. Cards are created and appended to the page 
contating the title, snippet, and image (if available) of the keyword

2. getRandomWikiTitle()
.. the function uses wtf_wikipedia to pull a specified (15 currently) 
number to random articels. Cards are created and appended to the page 
contating the title, snippet, and image (if available) of the random article

```
## References
* All pictures, titles, and paragraphs are pulled from 
wikipedia using their API and [wtf_wikipedia](https://github.com/spencermountain/wtf_wikipedia) API. 
* other references are [Building a Wiki Search App](https://www.freecodecamp.org/news/building-a-wikipedia-search-engine-project-4d84de3841d2/)