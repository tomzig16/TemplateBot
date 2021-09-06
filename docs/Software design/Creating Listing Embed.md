# Creating an embed to display the listing

To get an embed which can be sent to the channel, there's a function in `src/Functions/MakeEmbed.js` which takes a JavaScript Object as an arguement and returns the embed.

## Using the function

#### Import the function

- Use a relative file location in the file you want to use it.
- To import a file, you have to include a require statement at the top of your file.
- Here's an example for this function, if your file is located in SlashFiles: 
	`const { makeListingEmbedFromObject }  = require("../Functions/MakeEmbed.js")`

#### Create the object

The function uses the following properties of the object that you provide as the only arguement:

- `title` (String), which would be title of the embed.
- `authorName` (String), which would be the name of the person who want's their freelance to be listed.
- `authorProfilePictureURL` (String), which would be the URL to the profile picture of the person mentioned above.
- `listingDescription` (String), which would be a short description about the listing.
- `thumbnailImageURL` (String), which would be the URL to the thumbnail of the listing embed (could be their freelance listing's project icon or just the person's avatar, I'm not gatekeeping on what you provide).
- `listingInfoObjectsArray` (Array), which would contain other Objects which have the title and the value of the feild. The object should contain the following properties:
	- `title`, which contains the name/heading of the feild.
	- `value`, which contains the value/content of the feild.

---
Once you do all the stuff mentioned above, you can proceed on actually using the function, the function only *returns* an embed so you have to manually *send* it as an embed.
Example:
```JavaScript
const { makeListingEmbedFromArray }  = require("../Functions/MakeEmbed.js")

...

const listingInfoObjects = [{...}, {...}, ...]
const listingEmbedInfo = { ... , 
					 	  listingInfoObjectsArray: listingInfoObjects
						  }

const listingEmbed = makeListingEmbedFromArray(listingEmbedInfo)

channel.send({ embeds: [listingEmbed] });
```