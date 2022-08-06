/* eslint-disable no-console */
import { IEmailProvider } from '@/shared/infra/providers/email/email.provider.interface';

export class MockEmailProvider implements IEmailProvider {
  async sendEmailVerificationCode(input: {
    email: string;
    verificationCode: string;
  }): Promise<void> {
    console.log(
      `\n📧 Sending email ${input.email} with verification code ${input.verificationCode}\n`,
    );
  }

  async sendRecoverUserPassword(input: {
    email: string;
    recoverHash: string;
  }): Promise<void> {
    console.log(
      `\n📧 Sending email ${input.email} with recover hash ${input.recoverHash}\n`,
    );
  }

  async sendGenericEmail(input: {
    to: string;
    from: string;
    subject: string;
    html: string;
  }): Promise<void> {
    console.log(
      `\n📧 Sending email to ${input.to} from ${input.from} with subject ${input.subject}\n`,
    );
  }
}