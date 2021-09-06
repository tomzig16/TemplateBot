# Temporary channels (threads)
#feature
<hr>

This document describes the use and implementation of temporary channels (threads)

<hr>

## The problem they are solving

The main reason to use temporary channels or further threads in order to avoid clutter in the channel. So the idea is that once template is posted by the bot, all further discussion is done inside a thread under posted message. That way one message does not get on top of another and all posts made by the bot are being seen.

However, for now we are leaving this as a manual task for users to do. It is mainly because the feature is quite new and Discord APIs are still implementing their solution for it, so we will implement it once theres more information on it.


%% List of todos todo things. Keeping this list as comment makes them appear in the main todo plugin browser, but does not render in Preview document window %%