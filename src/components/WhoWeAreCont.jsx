import React from "react";
import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import InspirationQuote from "./InspirationQuote";

export default function LeadershipDevelopment() {
  return (
    <div className="p-4 md:p-8 max-w-8xl mx-auto space-y-10">
      <InspirationQuote text="Together, We Ensure That Life’s Length Is Matched by Its Depth and Impact." />

      <div className="bg-white rounded-lg shadow-md">
        <CardContent className="space-y-4 flex flex-col gap-4">
          <Typography variant="h5" className="font-semibold text-indigo-600">
            1. LEADERSHIP DEVELOPMENT: Transformative Leadership: From Self to
            Society
          </Typography>
          <Typography className="text-justify">
            At the Master Key Mentorship Society, we challenge the common
            mindset of “it’s my life.” We believe that you belong to the world
            and have a responsibility to lead with purpose, impact, and
            innovation. Transformative leadership is not about complaining or
            grumbling at challenges—it’s about rising above them to create
            solutions that inspire change.
          </Typography>
          <ul className="list-disc list-inside space-y-1 flex flex-col gap-2">
            <li>
              <strong>Instill a Sense of Responsibility:</strong> Help youth
              understand their interconnectedness and inspire ownership of
              shaping a better future.
            </li>
            <li>
              <strong>Cultivate a Problem-Solving Mindset:</strong> Train youth
              to address challenges creatively and resourcefully.
            </li>
            <li>
              <strong>Promote Teamwork and Collaboration:</strong> Encourage
              teamwork to harness diverse perspectives and build trust.
            </li>
            <li>
              <strong>Empower Innovative Leadership:</strong> Develop leaders
              who take initiative and drive change.
            </li>
            <li>
              <strong>Encourage a Global Perspective:</strong> Foster
              understanding that leadership includes contributing to the greater
              good.
            </li>
          </ul>
          <Typography>
            Through this focus, we prepare youth to step into the world as
            confident, solution-oriented leaders who embrace challenges as
            opportunities. Together, We Aim To Create A Generation That Doesn’t
            Just Live For Themselves But Leaves An Indelible Mark On The World.
          </Typography>
        </CardContent>
      </div>

      <InspirationQuote text="Together, We Aim To Create A Generation That Doesn’t Just Live For Themselves But Leaves An Indelible Mark On The World." />

      <div className="bg-white shadow-md rounded-lg">
        <CardContent className="space-y-4">
          <Typography variant="h5" className="font-semibold text-indigo-600">
            The "7 C’s" of Leadership Development
          </Typography>
          <ul className="list-decimal list-inside space-y-1 flex flex-col gap-2 mt-2">
            <li>
              <strong>Competence:</strong> Equip youth with essential skills to
              thrive in a changing world.
            </li>
            <li>
              <strong>Confidence:</strong> Empower young leaders to face
              challenges and embrace opportunities.
            </li>
            <li>
              <strong>Connection:</strong> Foster collaboration and positive
              relationships.
            </li>
            <li>
              <strong>Character and Caring:</strong> Guide youth with integrity,
              fairness, and empathy.
            </li>
            <li>
              <strong>Contribution:</strong> Inspire giving back to society for
              sustainable impact.
            </li>
            <li>
              <strong>Coping:</strong> Provide tools to handle stress and
              adversity.
            </li>
            <li>
              <strong>Control:</strong> Help youth take charge and make wise
              decisions.
            </li>
          </ul>
        </CardContent>
      </div>

      <div className="bg-white shadow-md rounded-lg">
        <CardContent className="space-y-4 flex flex-col gap-4">
          <Typography variant="h5" className="font-semibold text-indigo-600">
            2. MASTER KEY MENTORSHIP SOCIETY SCHOLARSHIP FUND: EMPOWERING YOUTH
            AND BRIDGING GAPS
          </Typography>
          <Typography className="text-justify">
            We recognizes a critical need for a{" "}
            <strong>scholarship fund</strong> that supports youth who fall
            through the cracks of traditional scholarship systems. Many
            scholarships are awarded during transitions, such as from primary to
            secondary school or secondary to tertiary institutions. However,
            students who struggle to meet academic standards or cannot secure
            scholarships face a major challenge in finding long-term financial
            support for their education.
          </Typography>
          <Typography className="text-justify">
            These youth, despite their potential, often find themselves without
            resources to continue their academic journey, resulting in dropouts
            and limited opportunities. This lack of financial stability not only
            hinders personal growth but also contributes to broader social
            issues like youth unemployment and underachievement.
          </Typography>
          <Typography className="text-justify">
            Our scholarship fund aims to <strong>bridge this gap</strong> by
            providing <strong>consistent, long-term financial support</strong>{" "}
            to students who need it most. By empowering these youth with the
            resources to continue their education, we create opportunities for
            them to grow into{" "}
            <strong>leaders, innovators, and change-makers.</strong> This
            initiative will help ensure equal access to educational
            opportunities, foster leadership development, and break the cycle of
            poverty, creating a brighter future for youth and society at large.
          </Typography>
        </CardContent>
      </div>
    </div>
  );
}
