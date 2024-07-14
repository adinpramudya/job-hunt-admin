import OverviewForm from "@/components/forms/OverviewForm";
import SocialMediaForm from "@/components/forms/SocialMediaForm";
import TeamForm from "@/components/forms/TeamForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getServerSession } from "next-auth";
import { FC } from "react";
import prisma from "../../../../lib/prisma";
import { authOptions } from "@/lib/auth";

interface SettingsProps {}
export const revalidate = 0;
async function getDetailCompany() {
  const session = await getServerSession(authOptions);

  const company = await prisma.company.findFirst({
    where: { id: session?.user.id },
    include: {
      Companyoverview: true,
      CompanySocialMedia: true,
      CompanyTeam: true,
    },
  });

  return company;
}

const Settings: FC<SettingsProps> = async ({}) => {
  const company = await getDetailCompany();

  return (
    <div>
      <div className="font-semibold text-3xl mb-5">Settings</div>
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm detail={company?.Companyoverview[0]} />
        </TabsContent>
        <TabsContent value="socialLinks">
          <SocialMediaForm detail={company?.CompanySocialMedia[0]} />
        </TabsContent>
        <TabsContent value="teams">
          <TeamForm teams={company?.CompanyTeam} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
