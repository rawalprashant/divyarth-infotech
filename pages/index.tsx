import path from 'path';
import * as fs from 'fs';
import { GetStaticProps, NextPage } from 'next';

import { AppLayout } from '@/layout/AppLayout';
import { Hero } from '@/components/HomepageSections/Hero';
import { GettingStarted } from '@/components/HomepageSections/GettingStarted';
import { OpenSource } from '@/components/HomepageSections/OpenSource';
import { ExploreTemplates } from '@/components/HomepageSections/ExploreTemplates';

const Home = () => {
  return (
    <AppLayout>
      <Hero />
      <GettingStarted />
      <OpenSource />
      <ExploreTemplates />
    </AppLayout>
  );
};

export default Home;
