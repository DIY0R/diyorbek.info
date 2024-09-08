import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://www.ia.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            IT-sharq
          </a>{' '}
          | Mar. 2023 - {calculateDuration('2023-03-01', true)}
        </TimelineEvent.Title>
        <TimelineEvent.Description>
          - Designing software architecture and database infrastructure. <br />-
          Setting up CI/CD pipelines. <br /> - Developing frontend and backend
          systems with a focus on backend development. <br /> - Experience with
          sockets, TCP,and FTP. <br /> - Creating Telegram bots.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Urban Coders | Aug. 2022 - Mar. 2023
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Turnkey projects, websites, and enhancements to existing projects.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>DBC | Jan. 2021 - Aug. 2022</TimelineEvent.Title>

        <TimelineEvent.Description>
          - Developing CRM systems. <br /> - Designing databases. <br /> -
          Developing frontend and backend.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
