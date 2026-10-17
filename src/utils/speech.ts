// Web Speech API for reading questions aloud in Vietnamese

class SpeechService {
  private isSpeaking: boolean = false;

  public speak(text: string, onEnd?: () => void) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    this.stop();

    const cleanText = text
      .replace(/x/g, 'nhân')
      .replace(/:/g, 'chia')
      .replace(/\+/g, 'cộng')
      .replace(/-/g, 'trừ')
      .replace(/=/g, 'bằng')
      .replace(/dm/g, 'đề xi mét')
      .replace(/cm/g, 'xăng ti mét')
      .replace(/km/g, 'ki lô mét')
      .replace(/kg/g, 'ki lô gam')
      .replace(/l\b/g, 'lít');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.9; // gentle speed for kids
    utterance.pitch = 1.05;

    // Pick a Vietnamese voice if available
    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find(v => v.lang.startsWith('vi') || v.name.includes('Vietnamese'));
    if (viVoice) {
      utterance.voice = viVoice;
    }

    this.isSpeaking = true;

    utterance.onend = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  public stop() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }

  public getSpeaking(): boolean {
    return this.isSpeaking;
  }
}

export const speech = new SpeechService();
