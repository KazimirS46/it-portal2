import { Metadata } from 'next';
import SolutionsMain from '@/components/SolutionsMain';

export const metadata: Metadata = {
  title: 'IT-Решения',
  description: 'IT портал самарской области',
};

export default function Solutions() {
  return <SolutionsMain />;
}
