import discord
import json
from discord.ext import commands

class SetTemplate(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
    
    @commands.command(aliases = ['set_templchannel', 'set_templated_channel'])
    async def SetTemplatedChannel(ctx, channelID):
        with open('TemplateChannels.json', 'r') as f:
            data = f.read()
            dictChannelID = json.loads(data)
        
        if str(channelID) not in dictChannelID:
            with open('TemplatedChannels.json', 'w') as jsonFile:
                json.dump(str(channelID), jsonFile, indent = 4)
            await ctx.send(f'<#{channelID}> added to \'Templated Channels\'')

def setup(bot):
    bot.add_cog(SetTemplate(bot))