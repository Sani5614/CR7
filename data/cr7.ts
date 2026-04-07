export type QuickHighlight = { label: string; value: number; suffix?: string };
export type StatItem = { key: string; label: string; value: number; icon: string };
export type CompetitionGoal = { competition: string; goals: number };
export type SeasonGoal = { season: string; goals: number };
export type GoalSplit = { label: string; goals: number; color: string };
export type GoalMilestone = { title: string; competition: string; year: number; note: string };
export type Trophy = { category: "Club" | "International" | "Individual"; title: string; count: number; description: string };
export type ClubCareer = { club: string; years: string; appearances: number; goals: number; notable: string };
export type GalleryImage = { id: number; alt: string };
export type Quote = { id: number; text: string };
export type TimelineEvent = { year: string; title: string; description: string };

export const quickHighlights: QuickHighlight[] = [
  { label: "Career Goals", value: 890, suffix: "+" },
  { label: "Appearances", value: 1240, suffix: "+" },
  { label: "Major Trophies", value: 35 }
];

export const stats: StatItem[] = [
  { key: "goals", label: "Total Goals", value: 890, icon: "Target" },
  { key: "assists", label: "Assists", value: 255, icon: "HandHeart" },
  { key: "apps", label: "Appearances", value: 1240, icon: "Shield" },
  { key: "hattricks", label: "Hat-tricks", value: 66, icon: "Flame" },
  { key: "intGoals", label: "International Goals", value: 128, icon: "Flag" },
  { key: "clubGoals", label: "Club Goals", value: 762, icon: "Trophy" }
];

export const goalsByCompetition: CompetitionGoal[] = [
  { competition: "League", goals: 540 },
  { competition: "UCL", goals: 140 },
  { competition: "Domestic Cups", goals: 95 },
  { competition: "International", goals: 128 }
];

export const goalsPerSeason: SeasonGoal[] = [
  { season: "16/17", goals: 42 },
  { season: "17/18", goals: 44 },
  { season: "18/19", goals: 28 },
  { season: "19/20", goals: 37 },
  { season: "20/21", goals: 36 },
  { season: "21/22", goals: 24 },
  { season: "22/23", goals: 30 },
  { season: "23/24", goals: 44 }
];

export const goalSplit: GoalSplit[] = [
  { label: "Club", goals: 762, color: "#D4AF37" },
  { label: "Country", goals: 128, color: "#6B7280" }
];

export const goalMilestones: GoalMilestone[] = [
  { title: "First Senior Goal", competition: "League", year: 2002, note: "Opened professional account for Sporting CP." },
  { title: "100th UCL Goal", competition: "UCL", year: 2018, note: "First player to hit triple digits in UCL." },
  { title: "500th Club Goal", competition: "League", year: 2017, note: "Reached 500 goals at club level." },
  { title: "50 International Goals", competition: "International", year: 2014, note: "Half-century for Portugal." },
  { title: "100 International Goals", competition: "International", year: 2020, note: "Historic century for Portugal." },
  { title: "800th Career Goal", competition: "League", year: 2021, note: "Major global milestone." }
];

export const trophies: Trophy[] = [
  { category: "Club", title: "League Titles", count: 7, description: "League crowns across England, Spain, and Italy." },
  { category: "Club", title: "UEFA Champions League", count: 5, description: "European champion with iconic knockout performances." },
  { category: "International", title: "EURO", count: 1, description: "Captain of Portugal's first major title in 2016." },
  { category: "International", title: "UEFA Nations League", count: 1, description: "Lifted the inaugural Nations League trophy." },
  { category: "Individual", title: "Ballon d'Or", count: 5, description: "Recognized multiple times as the world's best." },
  { category: "Individual", title: "European Golden Shoe", count: 4, description: "Elite goal-scoring consistency across eras." }
];

export const careerClubs: ClubCareer[] = [
  { club: "Sporting CP", years: "2002–2003", appearances: 31, goals: 5, notable: "Breakout talent in Portugal." },
  { club: "Manchester United", years: "2003–2009, 2021–2022", appearances: 346, goals: 145, notable: "Multiple league titles and UCL glory." },
  { club: "Real Madrid", years: "2009–2018", appearances: 438, goals: 450, notable: "All-time club top scorer and 4 UCL titles." },
  { club: "Juventus", years: "2018–2021", appearances: 134, goals: 101, notable: "Serie A titles and domestic cup success." },
  { club: "Al Nassr", years: "2023–Present", appearances: 96, goals: 82, notable: "Continues elite output and leadership." },
  { club: "Portugal NT", years: "2003–Present", appearances: 205, goals: 128, notable: "Record international scorer and captain." }
];

export const galleryImages: GalleryImage[] = [
  { id: 1011, alt: "Stadium lights over a football pitch" },
  { id: 1025, alt: "Football resting on grass" },
  { id: 1039, alt: "Crowd celebrating in stadium" },
  { id: 1043, alt: "Golden hour training field" },
  { id: 1050, alt: "Close-up of football net" },
  { id: 1062, alt: "Night match atmosphere" },
  { id: 1074, alt: "Team huddle before kickoff" },
  { id: 1084, alt: "Stadium architecture with lights" }
];

export const quotes: Quote[] = [
  { id: 1, text: "Greatness is not a moment. It's the discipline you choose every day." },
  { id: 2, text: "Pressure is a privilege when your standards are higher than the noise." },
  { id: 3, text: "The scoreboard changes, but your work ethic should never drop." },
  { id: 4, text: "Champions don't wait for confidence; they build it through repetition." }
];

export const timelineEvents: TimelineEvent[] = [
  { year: "2002", title: "Professional Debut", description: "Breaks into Sporting CP first team and earns global attention." },
  { year: "2003", title: "Move to Manchester", description: "Signs for Manchester United and starts rapid rise in Europe." },
  { year: "2008", title: "First Ballon d'Or", description: "Wins first Ballon d'Or after a dominant season." },
  { year: "2009", title: "Record Transfer", description: "Joins Real Madrid and begins historic goal-scoring era." },
  { year: "2016", title: "EURO Champion", description: "Captains Portugal to its first major international trophy." },
  { year: "2018", title: "New Chapter in Italy", description: "Transfers to Juventus and conquers Serie A." },
  { year: "2023", title: "Saudi League Era", description: "Joins Al Nassr and keeps producing at elite level." }
];
