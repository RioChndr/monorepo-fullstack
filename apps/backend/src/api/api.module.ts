import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { DonationModule } from './donation/donation.module';
import { StripeModule } from './stripe/stripe.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HealthModule, UserModule, DonationModule, StripeModule],
})
export class ApiModule { }
