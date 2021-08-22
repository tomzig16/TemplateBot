import discord
import json
from discord.ext import commands

class SetTemplate(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
    
    @commands.command(aliases = ['set_templchannel', 'set_templated_channel'])
    async def SetTemplatedChannel(self, ctx, channelID):
        with open('src/cogs/TemplatedChannels.json', 'r') as f:
            dictChannelID = json.load(f)
        
        #! Doesn't work, adds the channel ID to the end of the file
        if str(channelID) not in dictChannelID:
            with open('src/cogs/TemplatedChannel.json', 'w') as f:
                data = {f'{ctx.message.guild}':f'{channelID}'}
                json.dump(data, f, indent=4)
                await ctx.send(f'<#{channelID}> added to \'Templated Channels\'')

def setup(bot):
    bot.add_cog(SetTemplate(bot))