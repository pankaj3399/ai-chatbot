'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChatRequestOptions, CreateMessage, Message } from 'ai';
import { memo } from 'react';

interface SuggestedActionsProps {
  chatId: string;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;
}

function PureSuggestedActions({ chatId, append }: SuggestedActionsProps) {
  const suggestedActions = [
    {
      title: 'How do I file my first',
      label: 'VA disability claim?',
      action: 'How do I file my first VA disability claim?'
    },
    {
      title: 'What documents do I need to',
      label: 'get started with a disability claim?',
      action: 'What documents do I need to get started with a disability claim?'
    },
    {
      title: 'What is a service-connected disability,',
      label: 'and how is it determined?',
      action: 'What is a service-connected disability, and how is it determined?'
    },
    {
      title: 'What should I do if my disability claim',
      label: 'gets denied?',
      action: 'What should I do if my disability claim gets denied?'
    },
    {
      title: 'What benefits are available for veterans with a',
      label: '100% disability rating?',
      action: 'What benefits are available for veterans with a 100% disability rating?'
    },
    {
      title: 'How does the VA calculate my',
      label: 'disability rating?',
      action: 'How does the VA calculate my disability rating?'
    },
    {
      title: 'What is the difference between a Higher-Level ',
      label: 'Review and a Supplemental Claim?',
      action: 'What is the difference between a Higher-Level Review and a Supplemental Claim?'
    },
    {
      title: 'Can I still work while receiving',
      label: 'VA disability compensation?',
      action: 'Can I still work while receiving VA disability compensation?'
    },
    {
      title: 'What is a VA buddy letter,',
      label: 'and how can it help my claim?',
      action: 'What is a VA buddy letter, and how can it help my claim?'
    },
    {
      title: 'How do I apply for',
      label: 'VA health care?',
      action: 'How do I apply for VA health care?'
    }
  ]
  
  

  return (
    <div className="grid sm:grid-cols-2 gap-2 w-full">
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? 'hidden sm:block' : 'block'}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              window.history.replaceState({}, '', `/chat/${chatId}`);

              append({
                role: 'user',
                content: suggestedAction.action,
              });
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start hover:bg-zinc-400 hover:dark:bg-gray-500/30"
          >
            <span className="font-medium dark:text-white text-gray-500 text-wrap">{suggestedAction.title}</span>
            <span className="dark:text-white text-black">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);
