import discord
import os
from discord.ext import commands

bot = commands.Bot(command_prefix = '!')

for filename in os.listdir('src/cogs'):
    if filename.endswith('.py'):
        bot.load_extension(f'cogs.{filename[:-3]}')

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')

bot.run(str(os.getenv('BOT_TOKEN')))