import discord
import json
from discord.ext import commands

class SetTemplate(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
    
    @commands.command(aliases = ['set_templchannel', 'set_templated_channel'])
    async def SetTemplatedChannel(ctx, channelID: int):
        with open('TemplateChannels.json', 'r') as f:
            data = f.read()
            dictChannelID = json.loads(data)
        
        if channelID not in dictChannelID:
            with open('TemplatedChannels.json', 'w') as jsonFile:
                json.dump(channelID, jsonFile)
            await ctx.send(f'<#{channelID}> added to \'Templated Channels\'')
            
def setup(bot):
    bot.add_cog(SetTemplate(bot))