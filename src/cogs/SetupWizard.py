import discord
import json
from discord.ext import commands

class SetupWizard(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
    
    @commands.command(aliases = ['setup'])
    async def Setup(ctx):
        pass

def setup(bot):
    bot.add_cog(SetupWizard(bot))