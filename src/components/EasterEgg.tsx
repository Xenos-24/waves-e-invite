
"use client";

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { StargazerLilyIcon } from '@/components/icons/StargazerLilyIcon';
import { SparkleDoodleIcon } from '@/components/icons/SparkleDoodleIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const SECRET_QUESTION = "How old am I?";
const CORRECT_ANSWER = "Depends"; 
const MAX_ATTEMPTS = 6;

export function EasterEgg() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [showFailsafeDialog, setShowFailsafeDialog] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleLilyClick = () => {
    setIsPopupOpen(true);
    setFeedback(''); 
    setAnswer(''); 
    setAttemptCount(0); 
    setShowFailsafeDialog(false); 
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === CORRECT_ANSWER.toLowerCase()) {
      toast({
        title: "That's right! 🎉",
        description: "Off to a special surprise...",
      });
      router.push('/secret-date');
      setIsPopupOpen(false);
      setAttemptCount(0); 
    } else {
      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);
      if (newAttemptCount >= MAX_ATTEMPTS) {
        setIsPopupOpen(false);
        setShowFailsafeDialog(true);
      } else {
        setFeedback(`Nooope! Try again, love 💛`); // Removed "tries left" message
        toast({
          title: "Oops!",
          description: "That wasn't quite it. Give it another go!",
          variant: "destructive",
        });
      }
    }
    setAnswer(''); 
  };

  return (
    <>
      <button
        onClick={handleLilyClick}
        aria-label="A special surprise"
        className="transform transition-transform duration-200 hover:scale-125 focus:scale-125 focus:outline-none p-2 rounded-full hover:bg-pink-100/50 focus:bg-pink-100/50"
      >
        <StargazerLilyIcon className="w-20 h-20 md:w-24 md:h-24 cursor-pointer drop-shadow-lg" />
      </button>
      <p className="font-handwriting-body text-xs text-foreground/40 mt-2">Psst... what's this?</p>

      <Dialog open={isPopupOpen} onOpenChange={(open) => {
        setIsPopupOpen(open);
        if (!open) { 
          setAttemptCount(0); 
        }
      }}>
        <DialogContent className="sticky-note-popup sm:max-w-[425px] font-handwriting-body">
          <DialogHeader className="text-center">
            <DialogTitle className="font-handwriting-header text-3xl flex items-center justify-center space-x-2">
              <SparkleDoodleIcon className="w-5 h-5 text-yellow-400 transform -rotate-12" />
              <span>Oooo, Curious, as always!</span>
              <SparkleDoodleIcon className="w-5 h-5 text-yellow-400 transform rotate-12 scale-x-[-1]" />
            </DialogTitle>
            <DialogDescription className="font-handwriting-body text-base pt-2">
              Stop clicking random thingsss!!!<br/>
              See what's next? 👀
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="secret-answer" className="font-handwriting-header text-lg text-center">
                {SECRET_QUESTION}
              </Label>
              <Input
                id="secret-answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Your guess, my love..."
                className="sticky-note-input col-span-3 text-center"
                required
              />
            </div>
            {feedback && <p className="text-sm text-yellow-600 font-bold text-center">{feedback}</p>}
            <DialogFooter className="mt-2">
              <Button type="submit" className="sticker-button !text-base !px-4 !py-2 mx-auto">
                Is this it?
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showFailsafeDialog} onOpenChange={setShowFailsafeDialog}>
        <AlertDialogContent className="sticky-note-popup sm:max-w-md font-handwriting-body">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-handwriting-header text-3xl text-center">Wua Wua Wuaaaaa!!</AlertDialogTitle>
            <AlertDialogDescription className="font-handwriting-body text-xl text-center pt-2">
              "Very smart indeed, but I think you forgot I am a cyber sec guy... hehehehe"
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogAction 
              onClick={() => setShowFailsafeDialog(false)} 
              className="sticker-button !text-base !px-4 !py-2 mx-auto"
            >
              Okay, you got me!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
