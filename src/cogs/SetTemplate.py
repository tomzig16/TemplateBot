import discord
import json
from discord.ext import commands

class SetTemplate(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
    
    @commands.command(aliases = ['set_templchannel'])
    async def set_templated_channel(ctx, channelID: int):
        pass

    @commands.command()
    async def setup():
        pass

def setup(bot):
    bot.add_cog(SetTemplate(bot))