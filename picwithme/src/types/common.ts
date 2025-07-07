export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'cancel' | 'disabled';

export interface Tab {
  tabId: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
