import type { JSX, SVGProps } from 'react';
import {
  AlertCircle as LucideAlertCircle,
  ArrowDown as LucideArrowDown,
  ArrowLeft as LucideArrowLeft,
  ArrowRight as LucideArrowRight,
  ArrowUp as LucideArrowUp,
  ArrowUpRight as LucideArrowUpRight,
  Bell as LucideBell,
  Blocks as LucideBlocks,
  Bold as LucideBold,
  Bot as LucideBot,
  Brain as LucideBrain,
  Bug as LucideBug,
  CalendarClock as LucideCalendarClock,
  ChartColumn as LucideChartColumn,
  Check as LucideCheck,
  ChevronDown as LucideChevronDown,
  ChevronLeft as LucideChevronLeft,
  ChevronRight as LucideChevronRight,
  Circle as LucideCircle,
  CircleAlert as LucideCircleAlert,
  CircleCheck as LucideCircleCheck,
  CircleDashed as LucideCircleDashed,
  CircleHelp as LucideCircleHelp,
  CircleSlash as LucideCircleSlash,
  Clock as LucideClock,
  Clock3 as LucideClock3,
  Code as LucideCode,
  CodeXml as LucideCodeXml,
  Copy as LucideCopy,
  CornerUpLeft as LucideCornerUpLeft,
  CreditCard as LucideCreditCard,
  Database as LucideDatabase,
  Download as LucideDownload,
  Ellipsis as LucideEllipsis,
  ExternalLink as LucideExternalLink,
  Eye as LucideEye,
  EyeOff as LucideEyeOff,
  File as LucideFile,
  FileArchive as LucideFileArchive,
  FileAudio as LucideFileAudio,
  FileCode as LucideFileCode,
  FileImage as LucideFileImage,
  FileJson as LucideFileJson,
  FileSpreadsheet as LucideFileSpreadsheet,
  FileText as LucideFileText,
  FileVideo as LucideFileVideo,
  Filter as LucideFilter,
  Flag as LucideFlag,
  Folder as LucideFolder,
  Gamepad2 as LucideGamepad2,
  Gauge as LucideGauge,
  Globe as LucideGlobe,
  Globe2 as LucideGlobe2,
  Hand as LucideHand,
  Hash as LucideHash,
  Heart as LucideHeart,
  Highlighter as LucideHighlighter,
  Hourglass as LucideHourglass,
  Import as LucideImport,
  Italic as LucideItalic,
  KeyRound as LucideKeyRound,
  LayoutGrid as LucideLayoutGrid,
  Leaf as LucideLeaf,
  Lightbulb as LucideLightbulb,
  Link2 as LucideLink2,
  List as LucideList,
  ListChecks as LucideListChecks,
  ListFilter as LucideListFilter,
  ListOrdered as LucideListOrdered,
  LoaderCircle as LucideLoaderCircle,
  LockKeyhole as LucideLockKeyhole,
  Mail as LucideMail,
  MapPin as LucideMapPin,
  Maximize2 as LucideMaximize2,
  Merge as LucideMerge,
  MessageCircle as LucideMessageCircle,
  MessageSquare as LucideMessageSquare,
  MessageSquareText as LucideMessageSquareText,
  Mic as LucideMic,
  Minimize2 as LucideMinimize2,
  Minus as LucideMinus,
  Monitor as LucideMonitor,
  Moon as LucideMoon,
  MousePointer2 as LucideMousePointer2,
  MousePointerClick as LucideMousePointerClick,
  PanelLeftClose as LucidePanelLeftClose,
  PanelLeftOpen as LucidePanelLeftOpen,
  Paperclip as LucidePaperclip,
  Pause as LucidePause,
  PenLine as LucidePenLine,
  Pencil as LucidePencil,
  Plane as LucidePlane,
  Play as LucidePlay,
  Plus as LucidePlus,
  Power as LucidePower,
  Presentation as LucidePresentation,
  Redo2 as LucideRedo2,
  RefreshCw as LucideRefreshCw,
  Repeat as LucideRepeat,
  RotateCcw as LucideRotateCcw,
  RotateCw as LucideRotateCw,
  Route as LucideRoute,
  Scan as LucideScan,
  ScanSearch as LucideScanSearch,
  Search as LucideSearch,
  Send as LucideSend,
  Server as LucideServer,
  Settings as LucideSettings,
  ShieldCheck as LucideShieldCheck,
  SlidersHorizontal as LucideSlidersHorizontal,
  Smile as LucideSmile,
  SmilePlus as LucideSmilePlus,
  Sparkles as LucideSparkles,
  Split as LucideSplit,
  Square as LucideSquare,
  Sun as LucideSun,
  Trash2 as LucideTrash2,
  Underline as LucideUnderline,
  Undo2 as LucideUndo2,
  Unlink as LucideUnlink,
  UserRound as LucideUserRound,
  Users as LucideUsers,
  Utensils as LucideUtensils,
  Vault as LucideVault,
  Webhook as LucideWebhook,
  Workflow as LucideWorkflow,
  Wrench as LucideWrench,
  X as LucideX,
  Zap as LucideZap,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '../lib/utils';

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & {
  size?: number;
  solid?: boolean;
  strokeWidth?: number | string;
};

export type IconComponent = (props: IconProps) => JSX.Element;

/*
 * Every icon is a Lucide outline. `solid` marks the selected or active state:
 * media controls fill their shape, every other icon takes the heavier stroke
 * that `.icon-solid` sets in styles.css.
 */
function lucide(Component: LucideIcon, fills = false): IconComponent {
  return function Icon({ size = 16, solid = false, className, ...props }) {
    return (
      <Component
        size={size}
        fill={solid && fills ? 'currentColor' : 'none'}
        className={cn('icon', solid && !fills && 'icon-solid', className)}
        {...props}
      />
    );
  };
}

export const AlertCircle = lucide(LucideAlertCircle);
export const ArrowDown = lucide(LucideArrowDown);
export const ArrowLeft = lucide(LucideArrowLeft);
export const ArrowRight = lucide(LucideArrowRight);
export const ArrowUp = lucide(LucideArrowUp);
export const ArrowUpRight = lucide(LucideArrowUpRight);
export const Bell = lucide(LucideBell);
export const Blocks = lucide(LucideBlocks);
export const Bold = lucide(LucideBold);
export const Bot = lucide(LucideBot);
export const Brain = lucide(LucideBrain);
export const Bug = lucide(LucideBug);
export const CalendarClock = lucide(LucideCalendarClock);
export const ChartColumn = lucide(LucideChartColumn);
export const Check = lucide(LucideCheck);
export const ChevronDown = lucide(LucideChevronDown);
export const ChevronLeft = lucide(LucideChevronLeft);
export const ChevronRight = lucide(LucideChevronRight);
export const Circle = lucide(LucideCircle);
export const CircleAlert = lucide(LucideCircleAlert);
export const CircleCheck = lucide(LucideCircleCheck);
export const CircleDashed = lucide(LucideCircleDashed);
export const CircleHelp = lucide(LucideCircleHelp);
export const CircleSlash = lucide(LucideCircleSlash);
export const Clock = lucide(LucideClock);
export const Clock3 = lucide(LucideClock3);
export const Code = lucide(LucideCode);
export const CodeXml = lucide(LucideCodeXml);
export const Copy = lucide(LucideCopy);
export const CornerUpLeft = lucide(LucideCornerUpLeft);
export const CreditCard = lucide(LucideCreditCard);
export const Database = lucide(LucideDatabase);
export const Download = lucide(LucideDownload);
export const Ellipsis = lucide(LucideEllipsis);
export const Envelope = lucide(LucideMail);
export const ExternalLink = lucide(LucideExternalLink);
export const Eye = lucide(LucideEye);
export const EyeOff = lucide(LucideEyeOff);
export const File = lucide(LucideFile);
export const FileArchive = lucide(LucideFileArchive);
export const FileAudio = lucide(LucideFileAudio);
export const FileCode = lucide(LucideFileCode);
export const FileImage = lucide(LucideFileImage);
export const FileJson = lucide(LucideFileJson);
export const FileSpreadsheet = lucide(LucideFileSpreadsheet);
export const FileText = lucide(LucideFileText);
export const FileVideo = lucide(LucideFileVideo);
export const Filter = lucide(LucideFilter);
export const Flag = lucide(LucideFlag);
export const Folder = lucide(LucideFolder);
export const Gamepad2 = lucide(LucideGamepad2);
export const Gauge = lucide(LucideGauge);
export const Globe = lucide(LucideGlobe);
export const Globe2 = lucide(LucideGlobe2);
export const Hand = lucide(LucideHand);
export const Hash = lucide(LucideHash);
export const Heart = lucide(LucideHeart);
export const Highlighter = lucide(LucideHighlighter);
export const Hourglass = lucide(LucideHourglass);
export const Import = lucide(LucideImport);
export const Italic = lucide(LucideItalic);
export const KeyRound = lucide(LucideKeyRound);
export const LayoutGrid = lucide(LucideLayoutGrid);
export const Leaf = lucide(LucideLeaf);
export const Lightbulb = lucide(LucideLightbulb);
export const Link2 = lucide(LucideLink2);
export const List = lucide(LucideList);
export const ListChecks = lucide(LucideListChecks);
export const ListFilter = lucide(LucideListFilter);
export const ListOrdered = lucide(LucideListOrdered);
export const LoaderCircle = lucide(LucideLoaderCircle);
export const LockKeyhole = lucide(LucideLockKeyhole);
export const MapPin = lucide(LucideMapPin);
export const Maximize2 = lucide(LucideMaximize2);
export const Merge = lucide(LucideMerge);
export const MessageCircle = lucide(LucideMessageCircle);
export const MessageSquare = lucide(LucideMessageSquare);
export const MessageSquareText = lucide(LucideMessageSquareText);
export const Mic = lucide(LucideMic);
export const Minimize2 = lucide(LucideMinimize2);
export const Minus = lucide(LucideMinus);
export const Monitor = lucide(LucideMonitor);
export const Moon = lucide(LucideMoon);
export const MousePointer2 = lucide(LucideMousePointer2);
export const MousePointerClick = lucide(LucideMousePointerClick);
export const PanelLeftClose = lucide(LucidePanelLeftClose);
export const PanelLeftOpen = lucide(LucidePanelLeftOpen);
export const Paperclip = lucide(LucidePaperclip);
export const Pause = lucide(LucidePause);
export const PenLine = lucide(LucidePenLine);
export const Pencil = lucide(LucidePencil);
export const Plane = lucide(LucidePlane);
export const Play = lucide(LucidePlay, true);
export const Plus = lucide(LucidePlus);
export const Power = lucide(LucidePower);
export const Presentation = lucide(LucidePresentation);
export const Redo2 = lucide(LucideRedo2);
export const RefreshCw = lucide(LucideRefreshCw);
export const Repeat = lucide(LucideRepeat);
export const RotateCcw = lucide(LucideRotateCcw);
export const RotateCw = lucide(LucideRotateCw);
export const Route = lucide(LucideRoute);
export const Scan = lucide(LucideScan);
export const ScanSearch = lucide(LucideScanSearch);
export const Search = lucide(LucideSearch);
export const Send = lucide(LucideSend);
export const Server = lucide(LucideServer);
export const Settings = lucide(LucideSettings);
export const ShieldCheck = lucide(LucideShieldCheck);
export const SlidersHorizontal = lucide(LucideSlidersHorizontal);
export const Smile = lucide(LucideSmile);
export const SmilePlus = lucide(LucideSmilePlus);
export const Sparkles = lucide(LucideSparkles);
export const Split = lucide(LucideSplit);
export const Square = lucide(LucideSquare, true);
export const Sun = lucide(LucideSun);
export const Trash2 = lucide(LucideTrash2);
export const Underline = lucide(LucideUnderline);
export const Undo2 = lucide(LucideUndo2);
export const Unlink = lucide(LucideUnlink);
export const UserRound = lucide(LucideUserRound);
export const Users = lucide(LucideUsers);
export const Utensils = lucide(LucideUtensils);
export const Vault = lucide(LucideVault);
export const Webhook = lucide(LucideWebhook);
export const Workflow = lucide(LucideWorkflow);
export const Wrench = lucide(LucideWrench);
export const X = lucide(LucideX);
export const Zap = lucide(LucideZap);
