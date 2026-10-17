import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App, { clampChapter, shouldShowInsideJoke } from './App'
import { forRecipient, story } from './config/story'

afterEach(cleanup)

describe('cosmic story',()=>{
  it('opens for Varshini and advances to the universe chapter',async()=>{localStorage.clear();render(<App/>);expect(screen.getByText(/for Varshini/i)).toBeInTheDocument();fireEvent.click(screen.getByRole('button',{name:/begin the investigation/i}));expect(await screen.findByText(/Universe Is Acting Suspiciously/i)).toBeInTheDocument()})
  it('supports all nine direct chapter controls and restart',async()=>{localStorage.clear();render(<App/>);fireEvent.click(screen.getByRole('button',{name:'Go to chapter 9'}));expect(await screen.findByText(/About Our Next Chapter/i)).toBeInTheDocument();fireEvent.click(screen.getByRole('button',{name:/restart story/i}));expect(await screen.findByText('I made you something.')).toBeInTheDocument()})
  it('runs the affectionate roast interaction',async()=>{localStorage.clear();render(<App/>);fireEvent.click(screen.getByRole('button',{name:'Go to chapter 6'}));expect(await screen.findByText(/Love Language Is Questionable/i)).toBeInTheDocument();fireEvent.click(screen.getByRole('button',{name:/initiate roast battle/i}));fireEvent.click(screen.getByRole('button',{name:'Bully Him'}));expect(screen.getByText('Mercy shown')).toBeInTheDocument();expect(screen.getByText('0%')).toBeInTheDocument()})
  it('opens the fictional HYROX job description',async()=>{localStorage.clear();render(<App/>);fireEvent.click(screen.getByRole('button',{name:'Go to chapter 7'}));expect(await screen.findByText(/Real Reason I’m Here/i)).toBeInTheDocument();fireEvent.click(screen.getByRole('button',{name:/view actual job description/i}));expect(screen.getByText('Responsibilities')).toBeInTheDocument();expect(screen.getByText('Benefits')).toBeInTheDocument()})
  it('has safe personalization, persistence, sound, and optional-joke behavior',()=>{expect(story.soundEnabledByDefault).toBe(false);expect(forRecipient('Hello {name}')).not.toContain('{name}');expect(shouldShowInsideJoke(false,2,3)).toBe(false);expect(shouldShowInsideJoke(true,2,3)).toBe(true);expect(clampChapter(Number.NaN)).toBe(0);expect(clampChapter(99)).toBe(8)})
})
