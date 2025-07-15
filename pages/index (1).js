import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Upload } from "lucide-react";

export default function ClipsDepotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-12 md:px-16 font-sans">
      <div className="max-w-6xl mx-auto grid gap-16">

        {/* Logo and Navigation */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <img src="/ChatGPT Image Jul 14, 2025, 07_58_55 PM.png" alt="ClipsDepot Logo" className="w-12 h-12 rounded" />
            <h1 className="text-2xl font-bold tracking-tight">ClipsDepot</h1>
          </div>
          <Button variant="outline" className="text-white border-white">Log In</Button>
        </header>

        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Viral Clips from Your Content — Powered by AI
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Turn podcasts, interviews, and talking videos into scroll-stopping Reels, Shorts, and TikToks — fast.
          </p>
          <Button className="text-lg px-8 py-6 rounded-2xl">Get 3 Free Clips</Button>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">🎬 AI-Powered Editing</h3>
              <p className="text-gray-300">We scan your long-form content and extract viral moments, hooks, and punchlines automatically.</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">🎯 Hook-First Format</h3>
              <p className="text-gray-300">Every clip starts with a powerful hook and ends with a call to action — built for engagement.</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">⚡ Fast Turnaround</h3>
              <p className="text-gray-300">Get 3–10 clips per video in 24–72 hours. Ready to post on TikTok, Reels, and YouTube Shorts.</p>
            </CardContent>
          </Card>
        </section>

        {/* Who It's For */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Who It's For</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg list-disc pl-6 text-gray-200">
            <li>YouTube Podcasters & Interview Channels</li>
            <li>Coaches & Experts (business, mindset, fitness)</li>
            <li>Lifestyle & Beauty Creators</li>
            <li>Career & Productivity Channels</li>
            <li>Parenting, Therapy, and Wellness Brands</li>
            <li>Gaming Commentators (non-gameplay)</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let Us Clip It For You</h2>
          <p className="text-lg mb-6 text-gray-300">Upload your long-form video. We’ll return ready-to-post viral content in days.</p>
          <Button className="text-lg px-8 py-6 rounded-2xl flex items-center gap-2">
            <Upload className="w-5 h-5" /> Upload Video
          </Button>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-16">
          © 2025 ClipsDepot.com — All rights reserved.
        </footer>
      </div>
    </div>
  );
}