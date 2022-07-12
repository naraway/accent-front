import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActorKey } from '@nara-way/accent';

export default {
  title: 'domain/key/ActorKey',
  component: ActorKey,
// @ts-ignore
} as unknown as ComponentMeta<typeof ActorKey>;

// @ts-ignore
const Template: ComponentStory<typeof ActorKey> = () => {
  const actorId = '2g@1:1:1:1-11';
  const actorKey = ActorKey.fromId(actorId);

  return (
    <>
      <h1>Member</h1>
      <ul>
        <li><pre>ActorId   : {actorKey.id}</pre></li>
        <li><pre>AudienceId: {actorKey.genAudienceId()}</pre></li>
        <li><pre>CitizenId : {actorKey.genCitizenId()}</pre></li>
        <li><pre>DenizenId : {actorKey.genDenizenId()}</pre></li>
      </ul>

      <h1>Space</h1>
      <ul>
        <li><pre>StageId   : {actorKey.genStageId()}</pre></li>
        <li><pre>CineroomId: {actorKey.genCineroomId()}</pre></li>
        <li><pre>PavilionId: {actorKey.genPavilionId()}</pre></li>
        <li><pre>SquareId  : {actorKey.genSquareId()}</pre></li>
        <li><pre>StationId : {actorKey.genStationId()}</pre></li>
      </ul>
    </>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // label: 'Button',
};
