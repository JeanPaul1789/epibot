import type {
  ChatInputApplicationCommandData,
  Client,
  BaseCommandInteraction,
  ApplicationCommandChoicesData
} from 'discord.js'
import { DateTime } from 'luxon'

export interface Command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: BaseCommandInteraction) => void
}

export const processTime = (date: Date) =>
  Math.abs(
    DateTime.fromISO(date.toISOString()).diff(DateTime.now()).milliseconds
  )

export const campusOptions: ApplicationCommandChoicesData = {
  name: 'campus',
  description: 'from which campus do you need data ?',
  type: 'STRING',
  choices: [
    {
      name: 'Bordeaux',
      value: 'FR/BDX'
    },
    {
      name: 'Lille',
      value: 'FR/LIL'
    },
    {
      name: 'Lyon',
      value: 'FR/LYN'
    },
    {
      name: 'Marseille',
      value: 'FR/MAR'
    },
    {
      name: 'Mulhouse',
      value: 'FR/MLH'
    },
    // {
    //   name: 'Moulin',
    //   value: 'FR/MLN'
    // },
    {
      name: 'Montpellier',
      value: 'FR/MPL'
    },
    {
      name: 'Nantes',
      value: 'FR/NAN'
    },
    {
      name: 'Nice',
      value: 'FR/NCE'
    },
    {
      name: 'Nancy',
      value: 'FR/NCY'
    },
    {
      name: 'Paris',
      value: 'FR/PAR'
    },
    {
      name: 'Rennes',
      value: 'FR/REN'
    },
    {
      name: 'La Réunion',
      value: 'FR/RUN'
    },
    {
      name: 'Strasbourg',
      value: 'FR/STG'
    },
    {
      name: 'Toulouse',
      value: 'FR/TLS'
    },
    {
      name: 'Cotonou',
      value: 'BJ/COT'
    }
  ]
}
